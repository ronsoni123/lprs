def createPermutation(n,l):
    if n==1:
        return l         
    if n==0:
        return None
    k=2
    for i in range(2,n+1):
        for j in range((2**i)-(2**(i-1)),len(l),2**i):
            reverse(l,j,j+2**(i-1)-1)
        
    return l

def reverse(l,start,last):
    length=last-start
    k=last
    for i in range(start,start+length//2+1):
        temp = l[i] 
        l[i] = l[k] 
        l[k] = temp
        k-=1

if __name__=="__main__":
    n=int(input())
    l=[]
    for i in range(0,(2**n)):
        l.append(i)
    print(createPermutation(n,l))
    
